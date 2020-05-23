import axios from "../firebaseApi";

export const fetch = params =>
  new Promise(async reslove => {
    const response = await axios.get(`/${params}.json`);
    return reslove([...response.data]);
  });

  export const fetchImage = (path,id) => new Promise(async  reslove => {
     const response = await axios.get(`/${path}/${id}.json`)
     const { image } = response.data
     reslove(image)
  })

