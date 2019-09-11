<script type="text/babel" data-presets="env,react">
    class Clock extends React.Component {
        state = { time: this.getDate() };

        getDate() {
            return new Date().toLocaleTimeString();
        }

        componentDidMount() {
            setInterval(() => {
                this.setState({ time: this.getDate()  })
            }, 1000)
        }

        render() {
            return (
                <div className="time">
                    The time is: {this.state.time}
                </div>
            );
        }
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<Clock />, document.querySelector('#root'));
</script>






<!--The App component above will be rendered into this-->
<div id="root"></div>


<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />