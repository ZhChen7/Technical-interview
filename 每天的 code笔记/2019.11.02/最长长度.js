const str = 'aaa b cc, hello word'
str.split(/\s|,/).reduce((acc, cur) => acc > cur.length ? acc : cur.length)