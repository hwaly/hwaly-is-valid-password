var isValidPassword = (function () {
    var reverseCharacter = function (string) {
            return string.split('').reverse().join('');
        },
        equalsCharacter = function (string) {
            for (var i = 0; i < string.length - 1; i++) {
                if (string[i] != string[i + 1]) {
                    return false;
                }
            }

            return true;
        },
        returnResult = function (message) {
            return {
                message: message,
                isFail: message ? true : false
            }
        };

    var character = {
        special: '`~!@#$%^&*()_+-=[]{};:\'\"\\<>?,./',
        number: '0123456789',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        keyboard1: '~!@#$%^&*()_+',
        keyboard2: '`1234567890-=',
        keyboard3: 'QWERTYUIOP{}|',
        keyboard4: 'ASDFGHJKL:\"',
        keyboard5: 'ZXCVBNM<>?',
        keyboard6: 'qwertyuiop[]\\',
        keyboard7: 'asdfghjkl\;\'',
        keyboard8: 'zxcvbnm,./',
    };

    var checkData = [
        [character.number, '비밀번호는 012처럼 연속된 숫자를 입력할 수 없습니다.'],
        [character.lower, '비밀번호는 abc처럼 연속된 문자를 입력할 수 없습니다.'],
        [character.upper, '비밀번호는 ABC처럼 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard1, '비밀번호는 ~!@처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard1), '비밀번호는 @!~처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard2, '비밀번호는 `12처럼 키보드에 연속된 문자나 숫자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard2), '비밀번호는 21`처럼 키보드에 연속된 문자나 숫자를 입력할 수 없습니다.'],
        [character.keyboard3, '비밀번호는 QWE처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard3), '비밀번호는 EWQ처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard4, '비밀번호는 ASD처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard4), '비밀번호는 DSA처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard5, '비밀번호는 ZXC처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard5), '비밀번호는 CXZ처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard6, '비밀번호는 qwe처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard6), '비밀번호는 ewq처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard7, '비밀번호는 asd처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard7), '비밀번호는 dsa처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [character.keyboard8, '비밀번호는 zxc처럼 키보드에 연속된 문자를 입력할 수 없습니다.'],
        [reverseCharacter(character.keyboard8), '비밀번호는 cxz처럼 키보드에 연속된 문자를 입력할 수 없습니다.']
    ];

    character.otherMessage = {
        minlength: function (length) {
            return '비밀번호는 ' + length + '문자 이상이여야 합니다.';
        },
        equals: function (length) {
            return '같은 문자 ' + length + '자리가 올수 없습니다.';
        },
    };


    var isValidPassword = function (password) {
        var i, j, tempString;

        // minlength 체크
        var minlength = 10,
            value = password.value.trim();

        if (minlength && (value.length < minlength)) {
            return returnResult(character.otherMessage.minlength(minlength));
        }


        // 같거나 연속된 문자
        for (i = 0; i < value.length - 2 ; i++) {
            // tempString = password.charAt(i) + password.charAt(i + 1) + password.charAt(i + 2);
            tempString = value.slice(i, i + 3);

            // 같은 문자
            if (equalsCharacter(tempString)) {
                return returnResult(character.otherMessage.equals(3));
            }

            // 연속된 문자
            for (j = 0 ; j < checkData.length; j++) {
                if (checkData[j][0].indexOf(tempString) != -1) {
                    return returnResult(checkData[j][1]);
                }
            }
        }

        return returnResult();
    };

    return isValidPassword;
})();

export default isValidPassword;