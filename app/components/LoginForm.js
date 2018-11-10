import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.loginForm}>
                <Card className={classes.cardHeight}>
                    <CardContent>

                        <FormControl className={classes.formControl}>
                            <InputLabel>用户名</InputLabel>
                            <Input id="username"/>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel>密码</InputLabel>
                            <Input id="password" type='password'/>
                        </FormControl>

                        <div className={classes.inlineButton}>
                            <Button
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