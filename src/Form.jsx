import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import { object, string, number, ref} from 'yup'

export function Form({children, sendToParent, initialValues, validationSchema, submitButton}) {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={sendToParent}>
            <FormikForm style={styles.form}> 
                {children}
                <button className='headerButton' type="submit">{submitButton}</button>
            </FormikForm>
        </Formik>
    )
}

export function FormRow({name, label}) {
    return (
        <div style={styles.formRow}>
            <label style={styles.label}>{label}</label> 
            <Field style={styles.field} name={name}/> 
            <ErrorMessage style={styles.error} name={name} component="div"/> 
        </div>
    )
}

const styles = {
    form: {
        maxWidth: '500px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        border: 'none'
    },
    button: {
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '15px',  
    },
    formRow: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative'  
    },
    label: {
        width: '150px',    
        fontWeight: 'bold',
        color: 'white'
    },
    field: {
        flex: '1',         
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        fontSize: '12px',
        position: 'absolute',
        bottom: '-18px',
        left: '150px'     
    }
}


export function LogInForm({sendToParent}) {
    const loginInitials = { username: '', password: '' }
    const loginSchema = object({
        username: string().required('Username is required'),
        password: string().required('Password is required')
    })
    return (
        <Form sendToParent={sendToParent} initialValues={loginInitials} validationSchema={loginSchema} submitButton='Log In'>
            <FormRow name='username' label='User Name'/>
            <FormRow name='password' label='Password'/>
        </Form>
    )
}


export function SignInForm({sendToParent}) {
    const signinInitials = { username: '', email: '', password: '', repeatPassword: '', age: '', gender: '' }
    const signinSchema = object({
        username: string().required('Username is required'),
        email: string().email('Invalid email address').required('Email is required'),
        password: string()
            .min(12, 'Password must be at least 12 characters long')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/(?=(?:\D*\d){4})/, 'Password must contain at least 4 digits')
            .matches(/[!@#$%^&*_]/, 'Password must contain at least one special character')
            .required('Password is required'),
        repeatPassword: string()
            .oneOf([ref('password')], 'Passwords must match')
            .required('Please repeat your password'),
        age: number()
            .positive('Age must be positive')
            .integer('Age must be a whole number')
            .max(99, 'Age must be a valid value')
            .required('Age is required'),
        gender: string()
            .transform(v => v.toLowerCase().trim())
            .oneOf(['male', 'female'], 'Please select a valid gender')
            .required('Gender is required'),
    })
    return (
        <Form sendToParent={sendToParent} initialValues={signinInitials} validationSchema={signinSchema} submitButton='Register'>
            <FormRow name='username' label='User Name'/>
            <FormRow name='email' label='Email'/>
            <FormRow name='password' label='Password'/>
            <FormRow name='repeatPassword' label='Repeat Password'/>
            <FormRow name='gender' label='Gender'/>
            <FormRow name='age' label='Age'/>
        </Form>
    )
}





