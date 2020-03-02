function curring(fn,...args) {
    if(args.length < fn.length){
        return function () {
          return  curring(fn,...args,...arguments)
        }
    }else{
      return fn(...args)
    }

}
