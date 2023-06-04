export class Drawer {
  // Props:
  context = null;                  // - посилання на вміст графічної панелі canvas
  colors = [                       // - масив кольорів для зафарбування діаграм
    'red', 'green', 'blue', 'purple', 'orange', 'gray',
    'darkcyan', 'bisque', 'silver', 'lavander', 'navy'
  ];
  canvasWidth = 700;
  canvasHeight = 450;

  constructor() {
    console.log('Drawer -> Created');
    this.initContext();
    this.initCanvas();
    this.buildRobot();
  }

  initContext() {
    const canvas = document.getElementById('canvas-panel');
    this.context = canvas.getContext('2d');
  }

  initCanvas() {
    const logo = document.getElementById('logo-image');
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.drawImage(logo, 150, 0);
  }

  buildRobot() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    //Body
    this.context.fillStyle = 'blue';
    this.context.fillRect(100, 100, 200, 250);

    //Head
    this.context.fillStyle = 'green';
    this.context.fillRect(150, 20, 100, 100);

    //Eyes
    this.context.fillStyle = 'white';
    this.context.fillRect(170, 70, 20, 10);
    this.context.fillRect(210, 70, 20, 10);

    //Hand
    this.context.fillStyle = 'red';
    this.context.fillRect(80, 150, 20, 100);
    this.context.fillRect(300, 150, 20, 100);

    //Legs
    this.context.fillStyle = 'navy';
    this.context.fillRect(120, 350, 60, 70);
    this.context.fillRect(220, 350, 60, 70);
  }
}
