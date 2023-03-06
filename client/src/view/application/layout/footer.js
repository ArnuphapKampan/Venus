import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="shadow-none py-4 bg-light mt-auto">
        <div className="shadow-none container-fluid">
            <div className="shadow-none d-flex align-items-center justify-content-between small">
                <div className="shadow-none text-muted"></div>
                <div>Copyright &copy; KP.House Construction Website 2022 - {year}</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer