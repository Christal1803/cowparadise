import '../contactus/contactus.css';
import cboard from "../../assets/contact_us_board.jpg";
import coin from "../../assets/Finalcowcoin.gif";

function Contactus() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className='container-fluid' id='contact'>
            <div className='row'>
                <div className='contactus'>
                    <div className='row mx-p pt-5'>
                        <div className='col-lg-6 col-md-12 col-sm-12 my-auto'>
                            <img src={cboard} className='img-fluid' />

                            <img src={coin} className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Your name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Your email</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Your message (optional)</label>
                                    <textarea class="form-control" rows="12" id="exampleInputPassword1"></textarea>
                                </div>
                                <button type="submit" class="btn btn-secondary mb-5" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
