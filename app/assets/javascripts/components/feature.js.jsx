
function Feature(props) {
  return (
    <React.Fragment>
      <button className={props.className} onClick={() => window.location.href = props.link}>
        <h3>{props.title}</h3>
        <p>{props.about}</p>
      </button>
    </React.Fragment>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string
};


