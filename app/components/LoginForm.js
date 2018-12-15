import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import $ from 'jquery'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        display: 'flex',
    },
    loginForm: {
        textAlign: 'center',
    },
    inlineButton: {
        display: 'inline-flex'
    },
    cardHeight: {
        height: '360px'
    }
});


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            helperText: ''
        };

        // 这边绑定是必要的，这样 `this` (代表 LoginForm) 才能在回调函数中使用，例如：this.setState
        this.handleClick = this.handleClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleClick(event) {
        console.log(event.currentTarget);
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const data = {
            username: username,
            password: password
        };

        console.log(data);

        $.ajax({
            url: '/login.json',
            data: data,
            type: 'POST',
            success: (res) => {
                console.log(data)
                alert(res.msg)
                if (res.success == true) {
                    location.href = '/welcome'
                }
            },
            error: (err) => {
                console.log(err)
            }
        });
    };

    handleUsernameChange(event) {
        console.log(event.currentTarget);
        if (event.currentTarget.value.length < 3) {
            this.setState({
                helperText: '用户名长度不得小于3'
            })
        } else {
            this.setState({
                helperText: ''
            })
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.loginForm}>
                <Card className={classes.cardHeight}>
                    <CardContent>

                        <FormControl className={classes.formControl}>
                            <InputLabel>用户名</InputLabel>
                            <Input id="username" onChange={this.handleUsernameChange} autoFocus={true}/>
                            <FormHelperText id="component-helper-text">{this.state.helperText}</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel>密码</InputLabel>
                            <Input id="password" type='password'/>
                        </FormControl>

                        <div className={classes.inlineButton}>
                            <Button
                                onClick={this.handleClick}
                                variant="contained"
                                color="primary"
                                className={classes.button}>
                                登陆
                            </Button>
                            <Button variant="contained" className={classes.button}>
                                重置
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
        )
    }
}


LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);