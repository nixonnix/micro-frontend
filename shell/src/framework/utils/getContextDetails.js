import mapConfig from '../../config'


console.log('mapConfig --- ', mapConfig);
export function getContextDetails(type, context) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    
            console.log('mapConfig[type][context] ----- ', mapConfig[type][context]);
       
            resolve(mapConfig[type][context]);
        }, 1000)
    });
}