class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
      this.canvas = null;
  }

  render() {
    return (
      <canvas ref={el => this.canvas = el} id="progressCanvas" className="progress" />
    );
  }

  drawCanvas(completed, total) {
    const canvas = this.canvas,
      completedPart = completed / total,
      circleDepth = 7,
      circleOuterR = 52 - circleDepth,
      circleInnerR = 45 - circleDepth,
      ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.font = '24px Arial';
    ctx.lineWidth = circleDepth;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.beginPath();
    ctx.strokeStyle  = '#96d6f4';
    ctx.arc(canvas.width / 2, canvas.height / 2, circleInnerR, 0, Math.PI * 2 * completedPart);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle  = '#4ca89a';
    ctx.arc(canvas.width / 2, canvas.height / 2, circleOuterR, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillText(`${Math.round(completedPart * 100)}%`, canvas.width / 2, canvas.height / 2);
  }


  componentDidMount() {
    this.drawCanvas(this.props.completed, this.props.total);
  }

  componentWillReceiveProps(nextProps) {
    this.drawCanvas(nextProps.completed, nextProps.total);
  }
}
