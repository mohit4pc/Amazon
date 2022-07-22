import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Styles/Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <>
    <footer className="footer-03">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading">Men</h2>
								<ul className="list-unstyled">
		              <li><a href="#" className="py-1 d-block">Jeans</a></li>
		              <li><a href="#" className="py-1 d-block">Jumpers</a></li>
		              <li><a href="#" className="py-1 d-block">Leather</a></li>
		              <li><a href="#" className="py-1 d-block">Shorts</a></li>
		              <li><a href="#" className="py-1 d-block">Boots</a></li>
		              <li><a href="#" className="py-1 d-block">Watches</a></li>
		            </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading">Women</h2>
								<ul className="list-unstyled">
		              <li><a href="#" className="py-1 d-block">Dresses</a></li>
		              <li><a href="#" className="py-1 d-block">Jumpsuits</a></li>
		              <li><a href="#" className="py-1 d-block">Shirts</a></li>
		              <li><a href="#" className="py-1 d-block">T-shirts</a></li>
		              <li><a href="#" className="py-1 d-block">Swearshirts</a></li>
		              <li><a href="#" className="py-1 d-block">Jackets</a></li>
		              <li><a href="#" className="py-1 d-block">Coats</a></li>
		            </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4">
								<h2 className="footer-heading">Kids</h2>
								<ul className="list-unstyled">
		              <li><a href="#" className="py-1 d-block">Shirts</a></li>
		              <li><a href="#" className="py-1 d-block">T-shirts</a></li>
		              <li><a href="#" className="py-1 d-block">Polos</a></li>
		              <li><a href="#" className="py-1 d-block">Sweaters</a></li>
		              <li><a href="#" className="py-1 d-block">Sweatshirts</a></li>
		              <li><a href="#" className="py-1 d-block">Jackets</a></li>
		              <li><a href="#" className="py-1 d-block">Watches</a></li>
		            </ul>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row justify-content-end">
							<div className="col-md-12 col-lg-11 mb-md-0 mb-4">
								<h2 className="footer-heading">Follow Us</h2>
		            <ul className="ftco-footer-social p-0">
		              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"  className='text-dark'><span className="ion-logo-twitter"><FacebookIcon/></span></a></li>
		              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook" className='text-dark'><span className="ion-logo-facebook"><InstagramIcon /></span></a></li>
		              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram" className='text-dark'><span className="ion-logo-instagram"><TwitterIcon/></span></a></li>
		            </ul>
								<h2 className="footer-heading mt-5">Subscribe Us</h2>
								<form action="#" className="subscribe-form">
	                <div className="form-group d-flex">
	                  <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
	                  <input type="submit" value="Subscribe" className="form-control submit px-3 rounded-right bg-dark" />
	                </div>
	              </form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>

    </>
  )
}

export default Footer