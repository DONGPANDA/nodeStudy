/**
 * Created by 96004 on 2017/7/16.
 */
let str='name=zfpx; age=i@you';
function parse(str,sep,eq) {
    sep=sep||'&';
    eq=eq||'=';
    let fields=str.split(sep);
    let obj={}
    for (var i = 0; i < fields.length; i++) {
       let field=fields[i];
       let entry=field.split(eq);
        obj[entry[0]]=entry[1];
    }
    return obj;
}