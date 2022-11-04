import React from 'react';
import styled from 'styled-components';
import { Modal, message } from 'antd';
import Wheel from './Wheel';
import RegisterForm from '../RegisterForm';
import { AppContext } from '../appContext';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .my-header {
    width: 100%;
    text-align: center;
  }
  .my-header h3, .my-header h4 {
    color: white;
    font-size: 1.2em;
  }
`;

class LuckyWheel extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      finished: false,
      prize: null,
      wheelContainerWidth: 0,
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    let wheelContainerWidth = 390;
    if (this.ref && this.ref.current) {
      wheelContainerWidth = Math.floor(this.ref.current.clientWidth);
    }
    this.setState({ appWidth: window.innerWidth, wheelContainerWidth });
  };

  onFinishedGame = (prize) => {
    console.log('prize is: ', prize);
    this.setState({ finished: true, prize })
  }

  handleSubmitInfo = (values) => {
    console.log(values);
    this.setState({ prize: null });
    message.success("Chúng tôi đã nhận được thông tin của bạn. Phần quà sẽ được gửi tới trong thời gian sớm nhất.")
  }

  render() {
    // const { user } = this.props;
    const { wheelContainerWidth, prize } = this.state;
    return (
      <div>
        <AppContext.Consumer>
          {({user, setCurrentPage}) => (
            <div className="my-header" style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'white', fontSize: '2em' }}>Welcome {user.name}</h4>
              <Modal
                open={!!prize}
                onOk={() => this.setState({ prize: null })}
                onCancel={() => this.setState({ prize: null })}
                footer={null}
              >
                <h3>You won it!</h3>
                <RegisterForm user={user} onFinish={this.handleSubmitInfo} />
              </Modal>
            </div>
          )}
        </AppContext.Consumer>
        <div ref={this.ref} id="wheel-content" className="content">
          <h3 style={{ color: 'white', fontSize: '2em' }}>Let's play game!</h3>
          {wheelContainerWidth > 0 && (
            <Wheel width={wheelContainerWidth} onFinished={this.onFinishedGame} />
          )}
        </div>
      </div>
    );
  }
}
export default LuckyWheel;
