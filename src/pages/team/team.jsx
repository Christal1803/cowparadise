import '../team/team.css';
import teamboard from "../../assets/meet_out_team_board.jpg";
import john from "../../assets/John-Paul-Morris-qqmlfa0t8hh1z7njmek5c8h7ua9ofz5idm5117iav0.jpg";
import jose from "../../assets/Joseph-Pascal.jpg";
import fab from "../../assets/Fabian.jpg";
import thie from "../../assets/Thierry.jpeg";
import robin from "../../assets/Robin.jpeg";
import carla from "../../assets/Carla.jpeg";
import pat from "../../assets/Patrick.jpeg";
import sun from "../../assets/Sunmeet.jpeg";
import filter from "../../assets/filters_no_upscale-2.jpg";
import imgg from "../../assets/image.jpg";

function Team() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='team'>
                    <div class="widget-container mx-auto">
                        <img className='img-fluid mx-auto pt-5' src={teamboard} alt="" />
                    </div>

                    <div className='row mx-p mb-5 p-4'>
                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={john}
                                    alt="John Paul Morris"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/in/john-paul-morris-58426779/"> <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>JOHN PAUL MORRIS</h6>
                                        <span className='desg ps-5'>CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={jose}
                                    alt="Joseph-Pascal"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/in/joseph-pascal-4b293a170/"><svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Joseph Pascal</h6>
                                        <span className='desg ps-5'>CTO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={fab}
                                    alt="Fabian"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/in/fabian-grundmann/">  <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Fabian Grundmann</h6>
                                        <span className='desg ps-5'>Lead Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={thie}
                                    alt="Thierry"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/posts/thierry-clauson-098b5717_confederationcentregva-artbasel-runaway-activity-7135990638277271552-HPxo/">   <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Thierry Clauson</h6>
                                        <span className='desg ps-5'>Art Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={robin}
                                    alt="Robin Haefeli"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/in/robin-haefeli-b0b5b1a7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Robin Haefeli</h6>
                                        <span className='desg ps-5'>3D Artist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={carla}
                                    alt="Carla"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href='href="https://www.linkedin.com/in/carla-ceretti-charron-ba23b7164/"'><svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Carla Ceretti Charron</h6>
                                        <span className='desg ps-5'>Marketing Head</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'   >
                            <div className='image-container'>
                                <img
                                    src={pat}
                                    alt="Patrick Siebarth"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/in/patrick-siebarth-704917230/"> <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Patrick Siebarth</h6>
                                        <span className='desg ps-5'>Unreal Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5 mb-5'   >
                            <div className='image-container'>
                                <img
                                    src={sun}
                                    alt="Sunmeet Singh"
                                    className='img-fluid overlay-image'
                                />
                                <div className='details'>
                                    <div className='bg-b'>
                                        <a href="https://www.linkedin.com/in/sunmeets26/">   <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg></a>

                                    </div>
                                    <div className='bg-lb'>
                                        <h6 className='name ps-5'>Sunmeet Singh</h6>
                                        <span className='desg ps-5'>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                            <img src={filter} className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                            <img src={imgg} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
