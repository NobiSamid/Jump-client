import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';
import Services from '../services/Services';
import ReChart from './ReChart';
import './Home.css';

const Home = () => {
    return (
        <div className="home-main">
            <Carousel fade variant="dark">
                <Carousel.Item interval={2000}>
                    <img
                    style={{height:"40rem", width:"auto"}}
                    className="d-block w-100 height"
                    src="https://miro.medium.com/max/9720/1*WIgSF4IP8LPzOKp4l6j8qw.jpeg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Sky-Diving</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    style={{height:"40rem", width:"auto"}}
                    className="d-block w-100 height"
                    src="https://greatline.eu/wp-content/uploads/2018/12/Bungee-main-photo.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Bungee-Jumping</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    style={{height:"40rem", width:"auto"}}
                    className="d-block w-100 height"
                    src="https://i.ytimg.com/vi/I6VpZ3bnnKI/maxresdefault.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Wingsuit-Flying</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/****************** React Chart *******************/}
            <ReChart></ReChart>

            {/****************** Service *******************/}
            <Services></Services>

            {/****************** FAQ *******************/}
            <div className="faq">
                <h2>Friquently Asked Question</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is bungee jumping worse than skydiving?</Accordion.Header>
                        <Accordion.Body variant="success" >                
                            Image result for bungee jumping skydiving
                            As with all extreme sports, there is a degree of risk involved in both bungee jumping and skydiving. ... The National Safety Council says a person is more likely to be killed being stung by a bee or struck by lightning than during tandem skydiving. Bungee jumping sports the same fatality rate or 1 in 500,000.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Does skydiving feel like bungee?</Accordion.Header>
                        <Accordion.Body>
                            You might assume that skydiving will feel like a rollercoaster–or a bungee jump–or a high dive. Actually, none of your experiences along the “falling” lines are going to help you prepare for the experience, because they're all way off-base.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Is wingsuit flying difficult?</Accordion.Header>
                        <Accordion.Body>
                            “Suits are so good, it's scary,” says Douggs. “They are proper fighter planes.” Wingsuits operate using air resistance: when a pilot jumps, vents on the wings inflate, creating an airfoil shape that increases forward motion while slowing descent. ... Flying wingsuits requires training in skydiving, too.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is the cost of skydiving?</Accordion.Header>
                        <Accordion.Body>
                            The average price of a skydive is around $300, which buys you a tandem jump, attached to a highly experienced instructor. Skydiving at Long Island Skydiving Center costs $229 if you make a reservation, or $298 if you show up at the dropzone without a reservation.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;