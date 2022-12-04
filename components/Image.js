import NextImage from 'next/image'

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} />
}

// // eslint-disable-next-line jsx-a11y/alt-text
// const Image = ({ ...rest }) => <NextImage {...rest} />

// export default Image
