package cn.mldn.util.service.abs;
/**
 * 业务层继承的公共父类
 * @author YOOTK
 */

import java.util.HashMap;
import java.util.Map;



public abstract class AbstractService {

	
		public Map<String,Object> paramToMap(long currentPage, int lineSize, String column, String keyWord) {
			Map<String,Object> map = new HashMap<String,Object>() ;
			map.put("startPage", (currentPage - 1) * lineSize) ;
			map.put("lineSize", lineSize) ;
			if ("".equals(column)) {
				map.put("column", null) ;	// 明确设置null
			} else {
				map.put("column", column) ;
			}
			if ("".equals(keyWord)) {
				map.put("keyWord", null) ;	// 明确设置null
			} else {
				map.put("keyWord", "%"+keyWord+"%") ; 
			}
			return map ;
		}

	
}

