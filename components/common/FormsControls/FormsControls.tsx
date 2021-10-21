import React from 'react';
import styles from './FormControls.module.css'



//  const FormControl  = ({...props})=> {
//     let input = props.input
//     let meta = props.meta
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error: '')} >
//             <div>
//                 {props.children}
//             </div>
//             { hasError && <span> {meta.error}</span>}
//         </div>
//     )
// }
export const Textarea = ({...props})=> {
    let input = props.input
    let meta = props.meta
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: '')} >
            <div>
                <textarea {...props} {...input} {...meta}/>
            </div>
            { hasError && <span> {meta.error}</span>}
        </div>
    )
}


export const Input = ({...props})=> {

    let input = props.input
    let meta = props.meta
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: '')} >
            <div>
                <input {...props} {...input} {...meta}/>
            </div>
            { hasError && <span> {meta.error}</span>}
        </div>
    )
}
