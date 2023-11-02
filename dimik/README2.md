<div className='conatainer-fluid mx-2'>
                        <div className="row mt-5 mx-2">
                            <div className='col-md-3'>
                                <a href="#" className="btn btn-primary mb-4 w-100">All</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">Shirts</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">Reflectors</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">T-shirst</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">Pollo Shirts</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">Aprons</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">Hoddies</a>
                                <a href="#" className="btn btn-primary mb-4 w-100">Uniforms</a>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className="row">{
                                ItemsData.map(item=>{
                                    <div className="col-md-4">
                                        <div class="card">
                                            <Image src={item.img}/>
                                        </div>
                                </div>    
                                })
                            }
                                
                            </div>
                        </div>
