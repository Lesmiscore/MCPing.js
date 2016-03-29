package com.nao20010128nao.MCPing;

import java.math.BigDecimal;

import com.nao20010128nao.MCPing.pc.PCQuery;
import com.nao20010128nao.MCPing.pe.PEQuery;

public class ConstructionHelper {
	public PCQuery constructPC(String ip, Double port) {
		int portInt = new BigDecimal(port).intValue();
		return new PCQuery(ip, portInt);
	}

	public PEQuery constructPE(String ip, Double port) {
		int portInt = new BigDecimal(port).intValue();
		return new PEQuery(ip, portInt);
	}
}
