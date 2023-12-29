const MainImage = ({women, title, alt}) => {

const handleClick = (e) => {
    e.target.parentElement.style.background = "red"
}

  return (
    <div className="image" onClick={handleClick}>
        <img src={women} alt={alt} />
        <p>{title}</p>
    </div>
  )
}

export default MainImage