import { Login } from '@components/loogin/Login'
import { connect } from 'react-redux'
import { update, reset } from '@store/counter/counterActions'
import { AppState } from '@store/store'
import { Dispatch } from 'redux'

const mapStateToProps = ({ user }: AppState) => ({
  user: user.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  update: () => dispatch(update),
  reset: () => dispatch(reset),
})
export const LoginContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
