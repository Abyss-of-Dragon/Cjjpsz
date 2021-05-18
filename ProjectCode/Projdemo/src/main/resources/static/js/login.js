$(document)
    .ready(function() {
        $('.ui.form')
            .form({
                fields: {
                    username: {
                        identifier  : 'username',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : '没写名字，君の名前は？'
                            }
                        ]
                    },
                    password: {
                        identifier  : 'password',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : '是不是忘写密码了？'
                            }
                        ]
                    }
                }
            })
        ;
    })
;

