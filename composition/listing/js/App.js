'use strict';

const App = ({items}) => (
  <main>{items.map(item => <ItemSwitch item={item} />)}
  </main>
);

const ItemSwitch = ({item}) => {
      switch(item.type) {
        case 'unisex':
          return <Item color="black" item={item} />;
        case 'male':
          return <Item color="blue" item={item} />;
        case 'female':
          return <Item color="orange" item={item} />;
      }
};
