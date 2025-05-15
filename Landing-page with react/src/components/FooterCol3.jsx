import React from 'react'


const FooterCol3 = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer-info">
                <h3 className='mt-5'>{props.main}</h3>
                <ul className='p-0 mt-4'>
                    {
                        props.listData.map((data) => {
                            return <li>{data}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FooterCol3