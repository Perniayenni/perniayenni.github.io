import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LazyImage = (props) => {
  const { url, alt, width, loader } = props
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      setImageSrc(url);
    };
  }, [url]);
  

  if (!imageSrc) {
    return (
      <div className='lazy-image'>
       {loader}
      </div>
    )
  }else {
    return  <img alt={alt} src={url} width={width} />
  }
  
}

LazyImage.defaultProps = {
  url : null,
  width: 250,
  loader: '...'
}

LazyImage.propTypes = {
  url: PropTypes.string,
  loader: PropTypes.node
}

export default LazyImage
