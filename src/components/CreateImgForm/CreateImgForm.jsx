import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import imageService from '../../services/image.services';



const CreateImgForm = () => {

  const [imgData, SetImgData] = useState({
    prompt: '',
    imgSide: '',
    url: ''
  })


  const { prompt, imgSide, url } = imgData

  const handleInputChange = e => {
    const { name, value } = e.target
    SetImgData({ ...imgData, [name]: value })
  }


  // const navigate = useNavigate()


  const handleFormSubmit = e => {
    e.preventDefault()
    imageService
      .generateImage(imgData)
      .then((response) => {
        SetImgData({ ...imgData, url: response.data.data })
        console.log(response.data.data)
      })
      .catch(err => console.log(err))
  }




  return (
    <div className='mt-5 bgDiv'>
      <main>
        <section className="container mt-4 mb-5">
          <>
            <Form onSubmit={handleFormSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="name">
                    <h1 className='text-center'>Create new image</h1>
                    <hr />
                    <h4 className='mt-4'>Write the description of the image:</h4>
                    <Form.Control type="text" value={prompt} onChange={handleInputChange} name="prompt" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>Select the size of the image:</h4>
                  <Form.Select className="mb-3" aria-label="imgSide" name='imgSide' onChange={handleInputChange}>
                    <option>Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="big">Big</option>
                  </Form.Select  >
                </Col>
              </Row>

              <div className=" d-grid mb-5 mt-4">
                <Button variant="dark" type="submit" >{!imgData.prompt ? 'Write the description of the image' : !imgData.imgSide ? 'Select the size of the image' : 'Generate image'}</Button>
              </div>

            </Form>
            {url && <div className='container'>
              <img src={url} alt="img" />
              <a href={url} download>
                <button>Descargar imagen</button>
              </a>
              <div className=" d-grid mb-5 mt-4">
                <a href={url} download />
              </div>
            </div>
            }

          </>



        </section>
      </main>
    </div>
  );
};

export default CreateImgForm;