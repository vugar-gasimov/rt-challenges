import PropTypes from 'prop-types';

const ProgressPer = ({ width: inputWidth }) => {
  return (
    <div>
      {' '}
      <div className='w-1/2 h-8 rounded-full bg-gray-300 text-red-500 relative z-0'>
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div className='innerContainer' style={{ width: `${inputWidth}%` }}>
            {inputWidth}%
          </div>
        ) : (
          alert(
            'Greetings, please enter value less than 100 and greater than 0. '
          )
        )}
      </div>
    </div>
  );
};

ProgressPer.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ProgressPer;
