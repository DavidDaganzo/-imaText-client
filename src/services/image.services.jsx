import axios from 'axios'

class ImageService {

  constructor() {

    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`
    })

  }

  generateImage(imgData) {
    return this.api.post('/generate-image', imgData)
  }


}

const imageService = new ImageService()

export default imageService