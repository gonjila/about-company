import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Companies = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        pauseOnDotsHover: true,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <Container className='container'>
            <Carousel {...settings} className='carousel'>
                <div className='image-wrapper'>
                    <img className='bitcoin' alt='bitcoin' src='images/partner-bitcoin.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='slack' alt='slack' src='images/partner-slack.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='envato' alt='envato' src='images/partner-envato.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='cisco' alt='cisco' src='images/partner-cisco.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='envato' alt='envato' src='images/partner-envato.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='slack' alt='slack' src='images/partner-slack.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='bitcoin' alt='bitcoin' src='images/partner-bitcoin.png' />
                </div>
                <div className='image-wrapper'>
                    <img className='cisco' alt='cisco' src='images/partner-cisco.png' />
                </div>
            </Carousel>
        </Container>
    );
};

export default Companies;

const Container = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    // wertilebidan romelic gaaqtiurebulia
    .slick-dots li.slick-active button:before {
        content: '•';
        opacity: 1;
        color: black;
    }

    // wertilebi
    .slick-dots li button:before {
        font-family: 'slick';
        font-size: 10px;
        line-height: 20px;
        position: absolute;
        /* top: 0;
        left: 0; */
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: 0.5;
        color: black;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .slick-arrow {
        width: auto;
        height: auto;
        top: -50px;
        z-index: 5;

        &:before {
            opacity: 1;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #ececec;
            border-radius: 10px;
        }
    }

    //marcxena isari
    .slick-prev {
        position: absolute;
        right: 100px;
        left: auto;

        &:before {
            content: url('images/black-left-arrow.png');
            background-color: rgba(255, 255, 255, 1);
        }
    }

    //marjvena isari
    .slick-next {
        position: absolute;
        right: 50px;

        &:before {
            content: url('images/black-right-arrow.png');
            background-color: white;
        }
    }
`;

const Carousel = styled(Slider)`
    width: 100%;
    height: 100%;

    div {
        height: 200px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        width: 100%;

        .image-wrapper {
            width: 270px;
            height: 174px;
            margin: 0px 15px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            background-color: white;
            box-shadow: 0px 0px 30px #0000000d;

            img {
                /* width: 213px;
                height: 106px; */
            }

            .bitcoin {
                width: 213px;
                height: 106px;
            }
            .slack {
                width: 230px;
                height: 93px;
            }
            .envato {
                width: 211px;
                height: 47px;
            }
            .cisco {
                width: 149px;
                height: 79px;
            }
        }
    }
`;
