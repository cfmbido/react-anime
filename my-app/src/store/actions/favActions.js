import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const addFavorites = (payload) => {
    return (dispatch, getState) => {
        let dataAvail = true

        getState().favfilms.forEach(element => {
          if(element.id === payload.id){
              dataAvail = false
           }  
        })

        if(dataAvail){
            Toast.fire({
                icon: 'success',
                title: 'Added to favorites'
            })
            dispatch({
                type: "ADD_FAV",
                payload
            })
        }else{
            Toast.fire({
                icon: 'error',
                title: 'Already in favorites'
            })
        }
    }
}

export const removeFavorites = (id) => {
    return (dispatch, getState) => {
        let filterFavFilms = []

        for( let i = 0; i < getState().favfilms.length; i++){ 
            if (getState().favfilms[i].id !== id) {
                filterFavFilms.push(getState().favfilms[i])
            }
        }

        dispatch({
            type: "REMOVE_FAV",
            payload: filterFavFilms
        })
        Toast.fire({
            icon: 'success',
            title: 'Removed from favorites'
        })
    }
}