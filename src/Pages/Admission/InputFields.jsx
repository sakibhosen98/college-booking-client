import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const InputFields = ({ admissonCollege }) => {

    // console.log(admissonCollege);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleForm = (data) => {

        // console.log(data);

        const admissionData = {
            collegeName: admissonCollege,
            name: data.name,
            subject: data.subject,
            email: data.email,
            phone: data.phone,
            address: data.address,
            birth: data.birth,
            photoUrl: data.photoUrl,
        }

        console.log(admissionData);

        fetch('http://localhost:5000/admissions', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(admissionData)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                if (data.acknowledged) {

                    // alert('user added succefully');
                    // event.target.reset();
                    toast.success('Admission Form submit successfull');
                    navigate('/mycollege');
                }
            });
    }

    return (
        <div className='h-[480] my-10 flex justify-center items-center'>
            <div className=''>
                <h1 className='text-4xl' >COLLEGE ADMISSIONS FORM</h1>
                <p className='text-green-600' >{admissonCollege}</p>
                <form onSubmit={handleSubmit(handleForm)}>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Name</span></label>
                        <input type='text' {...register('name', { required: 'Name is required' })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600' >{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Subject</span></label>
                        <input type='text' {...register('subject', { required: 'Subject must be required', maxLength: { value: 40, message: 'Lessthen 40 character' } })} className="input input-bordered w-full" />
                        {errors.subject && <p className='text-red-600' >{errors.subject.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Email</span></label>
                        <input type='email' {...register('email', { required: 'Email must be required', maxLength: { value: 30, message: 'Lessthen 30 character' } })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' >{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Phone</span></label>
                        <input type='text' {...register('phone', { required: 'Phone must be required', maxLength: { value: 11, message: 'Lessthen 12 character' } })} className="input input-bordered w-full" />
                        {errors.phone && <p className='text-red-600' >{errors.phone.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Address</span></label>
                        <input type='text' {...register('address', { required: 'address must be required', maxLength: { value: 30, message: 'Lessthen 30 character' } })} className="input input-bordered w-full" />
                        {errors.address && <p className='text-red-600' >{errors.address.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Photo Url</span></label>
                        <input type='url' {...register('photoUrl', { required: 'address must be required' })} className="input input-bordered w-full" />
                        {errors.photoUrl && <p className='text-red-600' >{errors.photoUrl.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-2xl">Date of birth</span></label>
                        <input placeholder='DD/MM/YY' type='text' {...register('birth', { required: 'Date of birth must be required', maxLength: { value: 15, message: 'Lessthen 15 character' } })} className="input input-bordered w-full" />
                        {errors.birth && <p className='text-red-600' >{errors.birth.message}</p>}
                    </div>

                    <input className="input input-bordered w-full btn btn-outline border-0 block border-b-4 mt-4" type="submit" value="Submit" />


                </form>

            </div>
        </div>
    );
};

export default InputFields;