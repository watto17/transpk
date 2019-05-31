import * as Yup from 'yup';

export const CustomersSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    contact : Yup.number()
    .required('contact is require'),
    packageUuid : Yup.string()
    .required('Please Select at least one package'),
    debit : Yup.number()
    .required('Debit is required'),
    credit : Yup.number()
    .required('Credit is required'),
});




