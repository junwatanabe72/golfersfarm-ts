import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/index';
import { initialUser } from "../utils/constant/text/body/user/text";
import App from '../App';

type a = typeof initialUser;

const mapStateToProps = (state: a) => {
  return {
    userData: state,
  };
};
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      addUser,
    },
    dispatch
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
