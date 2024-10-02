package com.entity.view;

import com.entity.JinrususheEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 进入宿舍
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-05-08 17:35:32
 */
@TableName("jinrusushe")
public class JinrususheView  extends JinrususheEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public JinrususheView(){
	}
 
 	public JinrususheView(JinrususheEntity jinrususheEntity){
 	try {
			BeanUtils.copyProperties(this, jinrususheEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
