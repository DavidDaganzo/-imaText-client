import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useState } from "react"
import imageService from '../../services/image.services';
import Loader from '../Loader/Loader';

const CreateImgForm = () => {

  const [imgData, SetImgData] = useState({
    prompt: '',
    imgSide: '',
    url: ''
  })

  const [loadingImage, setLoadingImage] = useState(false)

  const { prompt, imgSide, url } = imgData

  const handleInputChange = e => {
    const { name, value } = e.target
    SetImgData({ ...imgData, [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    setLoadingImage(true)
    imageService
      .generateImage(imgData)
      .then((response) => {
        SetImgData({ ...imgData, url: response.data.data })
        console.log(response.data.data)
        setLoadingImage(false)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className='mt-5'>
      <main>
        <section className="container mt-4 mb-5">
          <>

            <Row>
              <Col className='bgDiv' md={{ span: 5 }}>


                <Form onSubmit={handleFormSubmit}>

                  <Col >
                    <Form.Group className="mb-3" controlId="name">
                      <h1 className='text-center mt-3'>Create new image</h1>
                      <hr />
                      <h4 className='mt-4'>Write the description of the image:</h4>
                      <Form.Control type="text" value={prompt} onChange={handleInputChange} name="prompt" />
                    </Form.Group>




                    <h4>Select the size of the image:</h4>
                    <Form.Select className="mb-3" aria-label="imgSide" name='imgSide' onChange={handleInputChange}>
                      <option>Size</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="big">Big</option>
                    </Form.Select  >


                    <div className=" d-grid mb-2 mt-4 mb-3">
                      <Button variant="dark" type="submit" >{!imgData.prompt ? 'Write the description of the image' : !imgData.imgSide ? 'Select the size of the image' : 'Generate image'}</Button>
                    </div>
                  </Col>
                </Form>
              </Col>

              <Col md={{ span: 5, offset: 2 }}>
                {loadingImage && <Loader />}
                {url && <div>
                  <img src={url} className="img" alt="img" />
                  <a href={url} className="mt-5 mb-2 btn btn-dark d-grid" download>
                    <button>Download your image</button>
                  </a>
                  <div className=" d-grid mt-4">
                    <a href={url} download />
                  </div>
                </div>
                }
              </Col>
            </Row>
          </>



        </section>
      </main>
    </div>
  );
};

export default CreateImgForm;