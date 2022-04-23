class RandomDogService {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  getImage = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      fetch(this.baseURL + "images/search")
        .then((res) => res.json())
        .then((data) => {
          const image = data[0].url;

          return resolve(image);
        })
        .catch((err) => reject(err));
    });
  };
}

const instance = new RandomDogService("https://api.thedogapi.com/v1/");

export default instance;
