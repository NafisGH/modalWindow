function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
        const modal  = document.createElement('div')
        modal.classList.add('vmodal')
        modal.insertAdjacentHTML('afterbegin', `
                <div class="modal-overlay">
                <div class="modal-window" style="width: ${options.width} || ${DEFAULT_WIDTH}"> 
                    <div class="modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${options.closable ? `<span class="modal-close" data-close= 'true'>&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                    ${options.content || ''}
                    </div>
                    <div class="modal-footer">
                    <button>Ok</button>
                    <button>Camcel</button>
                    </div>
                </div>
                </div>
            
            `)
            document.body.appendChild(modal)
        return modal
}

let btnOpen = document.querySelector(".btn")

$.modal = function(options) {
   const $modal = _createModal(options)

   const modal = {
    open() {
        $modal.classList.add('open')
    },
    close() {
        $modal.classList.remove('open')
    },
    destroy() {},
}
   
    btnOpen.addEventListener('click', modal.open())
   
   $modal.addEventListener('click', event => {
    console.log('clicked', event.target.dataset.close)
    if(event.target.dataset.close) {
        modal.close()
    }
   })
    return modal
}
