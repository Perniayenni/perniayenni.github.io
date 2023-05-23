import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getBEMClasses } from '../shared/utils';

const LazyImage = (props) => {
  const { url, alt, width, loader, additionalClassName } = props
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
      <div className={getBEMClasses('lazy-image', {}, additionalClassName)}>
       {loader}
      </div>
    )
  }else {
    return <img className={getBEMClasses('', {}, additionalClassName)} alt={alt} src={url} width={width} />
  }
  
}

LazyImage.defaultProps = {
  url : null,
  loader: '...'
}

LazyImage.propTypes = {
  additionalClassName: PropTypes.string,
  url: PropTypes.string,
  loader: PropTypes.node
}

export default LazyImage
