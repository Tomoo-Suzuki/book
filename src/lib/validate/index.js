import {
  form_validate,
  form_controll
} from '_redux/actions/action';

import * as regs from '_lib/validate/regularExpressions'
import * as logics from '_lib/validate/logics'

const text_error = {
  required: {
    first_name: '名前のご入力をお願いします。',
    last_name: '苗字のご入力をお願いしま',
    first_name_kana: 'フリガナ(名)のご入力をお願いします。',
    last_name_kana: 'フリガナ(苗字)のご入力をお願いします。',
    tel: '電話番号のご入力をお願いします。',
    email: 'メールのご入力をお願いします。',
    email_confirm: 'メール(確認)のご入力をお願いします。',
    prefecture: '都道府県のご選択をお願いいたします。',
    zip: '郵便番号のご入力をお願いします。',
    city: '市区町村のご入力をお願いします。',
    address3: '番地のご入力をお願いします。',
    gender: 'ジェンダーのご選択をお願いいたします。',
    birthday: 'お誕生日のご選択をお願いいたします。'
  }
};

export const validator = (e, dispatch) => {

  const name = e.target.name;
  let value = e.target.value;
  const is_required = e.target.required;
  const tempHash = {}
  tempHash.key = name;

  if (is_required) {
    const res = logics.check_empty(value);
    if (res) {
      tempHash.val = text_error.required[name];
      dispatch(form_validate(tempHash));
    } else {
      tempHash.val = '';
      dispatch(form_validate(tempHash));
    }
  }
  if (name === 'last_name' || name === 'first_name') {
    value = logics.trim_space(value);
    value = logics.delete_htmlspecialchars(value);
    tempHash.val = value;
    console.log(tempHash.val)
    dispatch(form_controll(tempHash));
  }

  if (name === 'last_name_kana' || name === 'first_name_kana') {
    value = logics.trim_space(value);
    value = logics.delete_htmlspecialchars(value);
    tempHash.val = value;
    const is_kana = regs.katakana_all.test(value);
    console.log(tempHash.val)
    dispatch(form_controll(tempHash));
    if (!is_kana) {
      tempHash.val = 'カタカナのご入力をお願いいたします。';
      dispatch(form_validate(tempHash));
    }
  }


  //trim_space(name, value);


}