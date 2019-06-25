
import request from '../../../util/request';

export function query() {
  return request('/api/users');
}

