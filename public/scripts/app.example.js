class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.inputDate = document.getElementById("inputDate");
    this.inputTime = document.getElementById("inputTime");
    this.inputCapacity = document.getElementById("inputCapacity");
    this.searchBtn = document.getElementById("searchBtn");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.searchBtn.onclick = this.search;
  }

  search = async () => {
    this.clear(); // to clear first

    // to collect data from form
    const dateValue = this.inputDate.value;
    const timeValue = this.inputTime.value;
    const capacityValue = this.inputCapacity.value;

    if (!timeValue || !dateValue || !capacityValue) {
      alert('Mohon isi terlebih dahulu')
    }

    // make date and time into date time format
    const datetime = new Date(`${dateValue} ${timeValue}`)
    console.log(datetime)

    // function filter
    const filterer = (car) => {
      const dateFilter = car.availableAt > datetime;
      const capacityFilter = car.capacity > capacityValue;

      return dateFilter && capacityFilter;
    }

    const cars = await Binar.listCars(filterer);
    Car.init(cars);

    if (cars === 0) {
      const node = document.createElement("div");
      node.innerHTML = "<strong>Mohon maaf tidak ada mobil</strong>";
      this.carContainerElement.appendChild(node);
    }

    // add each item after filter
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
