<script type="text/babel" data-presets="env,react">
    const App = () => {
        return (
            <div>
                <Message
                    header="Changes in Service"
                    content="We just updated our privacy policy here to better service our customers."
                />
            </div>
        );
    }

    const Message = (props) => {
        return (
            <div className="ui message">
                <div className="header">
                    { props.header }
                </div>
                <p>
                    { props.content }
                </p>
            </div>
        );
    }


    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
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
