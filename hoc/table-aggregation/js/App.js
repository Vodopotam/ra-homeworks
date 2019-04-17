'use strict';

const wrapTable = (Component, tableType) => {
    return class WrappedTable extends React.Component {
        constructor(props) {
            super(props);
            this.newList = [];
        }

        componentWillUpdate(newProps) {
            let list = [...newProps.list];
            switch(tableType) {
                case 'year': {
                    list = list.reduce(this.yearList, []);
                    break;
                }
                case 'month': {
                    list.sort((a,b) => a.date > b.date ? 1 : -1);
                    list = list.reduce(this.monthList, []);
                    break;
                }
                default: {
                    list.sort((a,b) => a.date < b.date ? 1 : -1);
                }
            }
            this.newList = list;
        }

        getYear = (date = new Date()) => new Date(date).getFullYear();
        getMonth = date => new Date(date).toLocaleString('ru-ru', {month: 'short'});

        monthList = (result, item) => {
            const {date, amount} = item;
            const dateMonth = this.getMonth(date);
            const indexMonth = result.findIndex(el => el.month === dateMonth);

            if (indexMonth != -1) {
                result[indexMonth].amount += amount;
            } else {
                result = [...result, {month: dateMonth, amount}];
            }
            return result;
        }

        yearList = (result, item) => {
            const {date, amount} = item;
            const dateYear = this.getYear(date);
            const indexYear = result.findIndex(el => el.year === dateYear);
            if (indexYear != -1) {
                result[indexYear].amount += amount;
            } else {
                result = [...result, {year: dateYear, amount}]
            }
            return result
        }

        render() {
            return <Component {...this.props} list = {this.newList} />
        }
    }
}

const WrapMonthTable = wrapTable(MonthTable, 'month'),
    WrapYearTable = wrapTable(YearTable, 'year'),
    WrapSortTable = wrapTable(SortTable);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            console.log(this.props, this.state)
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <WrapMonthTable list={this.state.list} />
                <WrapYearTable list={this.state.list} />
                <WrapSortTable list={this.state.list} />
            </div>
        );
    }
};