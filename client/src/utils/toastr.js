import toastr from 'toastr';
export function showToaster({data},show,errorMsg){
    if(show){
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        if(data  && data.status>=200 && data && data.status<300){
            toastr.success(data.message);
        }
        else{
            toastr.error(data  && data.message?data.message:errorMsg);
        }

    }
}