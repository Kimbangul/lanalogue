class InfoGenerator  {
  title: string;
  imgSrc: string;
  release: string;

  constructor(title: string, imgSrc: string, release: string){
    this.title = title;
    this.imgSrc = imgSrc;
    this.release = release;
  }
} 

const info : InfoGenerator[] = [
  new InfoGenerator("Last Analogue", "", "2020.09.01"),
  new InfoGenerator("Born To Be", "", "2020.10.13"),
  new InfoGenerator("A", "", "2020.12.01"),
  new InfoGenerator("Star", "", "2020.12.29"),
  new InfoGenerator("Ladio", "", "2021.01.11"),
  new InfoGenerator("Palace", "", "2021.01.26"),
  new InfoGenerator("21401141-2", "", "2021.03.14"),
  new InfoGenerator("ONEPIECE", "", "2021.04.13"),
  new InfoGenerator("27.5℃", "", "2021.04.19"),
  new InfoGenerator("LOVE", "", "2021.05.23"),
  new InfoGenerator("Bxxl", "", "2021.08.26"),
  new InfoGenerator("As I Am", "", "2021.11.10"),
  new InfoGenerator("Stereo Out!", "", "2022.04.30"),
]

export default info;