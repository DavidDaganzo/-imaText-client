import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"



const CreateImgForm = () => {

  const [imgData, SetImgData] = useState({
    text: '',
    imgSide: '',
  })


  const handleInputChange = e => {
    const { name, value } = e.target
    SetImgData({ ...imgData, [name]: value })
  }



  const navigate = useNavigate()


  const handleFormSubmit = e => {
    e.preventDefault()
    // propertiesService
    //   .saveProperty(imgData)
    //   .then(() => {
    //     navigate('/properties')
    //   })
    //   .catch(err => setErrors(err.response.data.errorMessages))
  }

  const { text, imgSide } = imgData


  return (
    <div className='mt-5'>
      <main>
        <section class="container">
          <>
            <Form onSubmit={handleFormSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="name">
                    <h1 className='text-center'>Create new image</h1>
                    <hr />
                    <h4 className='mt-4'>Write the description of the image:</h4>
                    <Form.Control type="text" value={text} onChange={handleInputChange} name="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>Select the size of the image:</h4>
                  <Form.Select className="mb-3" aria-label="imgSide" name='imgSide' onChange={handleInputChange}>
                    <option>Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Big">Big</option>
                  </Form.Select  >
                </Col>
              </Row>

              <div className=" d-grid mb-5 mt-4">
                <Button variant="dark" type="submit" >{!imgData.text ? 'Write the description of the image' : !imgData.imgSide ? 'Select the size of the image' : 'Generate image'}</Button>
              </div>

            </Form>

          </>



        </section>
      </main>
    </div>
  );
};

export default CreateImgForm;