class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
      this.canvas = null;
      this.completed = this.props.completed;
  }

  render() {
    return (
      <canvas ref={el => this.canvas = el} id="progressCanvas" className="progress" />
    );
  }

  componentDidMount() {
    this.showCanvas();
  }

  drawCanvas() {
    const canvas = this.canvas,
      completedPart = this.completed / this.props.total;
    this.ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    this.ctx.font = '24px Arial';
    this.ctx.lineWidth = this.circleDepth;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.canvasX = canvas.width / 2;
    this.canvasY = canvas.height / 2;
    this.ctx.beginPath();
    this.ctx.strokeStyle  = '#96d6f4';
    this.ctx.arc(this.canvasX, this.canvasY, this.circleInnerR, 0, Math.PI * 2 * completedPart);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle  = '#4ca89a';
    this.ctx.arc(this.canvasX, this.canvasY, this.circleOuterR, 0, Math.PI * 2);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillText(`${Math.round(completedPart * 100)}%`, this.canvasX, this.canvasY);
  }

  showCanvas() {
    this.circleDepth = 7;
    this.circleOuterR = 52 - this.circleDepth;
    this.circleInnerR = 45 - this.circleDepth;
    this.drawCanvas();
  }

  componentWillUpdate() {
    this.drawCanvas();
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.completed = nextProps.completed;
    return nextProps.completes !== this.props.completed;
  }
}
