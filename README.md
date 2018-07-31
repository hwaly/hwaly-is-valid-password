# hwaly-validate

```
npm i hwaly-validate
```
{
    name: '',
    rules: [
        {
            required: true,
            focus: true
        }
    ]
}
// default
{
    valid: '',
    equals: '',
    required: true,
    focus: true,
    message: '',
    alert: true
}

// valid: number, 

숫자만
/\d/g

한글만
/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/

전화번호
/^\d{2,3}-\d{3,4}-\d{4}$/;