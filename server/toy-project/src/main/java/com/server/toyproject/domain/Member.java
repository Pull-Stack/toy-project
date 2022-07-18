package com.server.toyproject.domain;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.server.toyproject.domain.type.RoleType;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Table(indexes = {
	@Index(columnList = "name"),
	@Index(columnList = "nickname"),
	@Index(columnList = "createdAt")
})
@Entity
public class Member extends AuditingFields {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 50, nullable = false, unique = true)
	private String name;

	@Column(length = 50, nullable = false, unique = true)
	private String nickname;

	@Column(nullable = false)
	private String password; //TODO: 암호화 작업 - Spring Security 사용 예정

	@Column(nullable = false, unique = true)
	private String email;

	@Enumerated(EnumType.STRING)
	private RoleType role;

	/*
	//TODO: Board 연결
	@OneToMany(mappedBy = "member")
	private final Set<Board> boards = new LinkedHashSet<>();
	*/

	private boolean isDeleted = false;

	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
	private LocalDateTime deletedAt;

	protected Member() {
	}

	private Member(String name, String nickname, String password, String email) {
		this.name = name;
		this.nickname = nickname;
		this.password = password; //TODO: 암호화 추가 예정
		this.email = email; //TODO: 이메일양식 유효성 검사
		this.role = RoleType.USER;
	}

	private static Member of(String name, String nickname, String password, String email) {
		return new Member(name, nickname, password, email);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (!(o instanceof Member))
			return false;
		Member member = (Member)o;
		return this.id != null && this.id.equals(member.id);
	}

	@Override
	public int hashCode() {
		return Objects.hash(this.id);
	}
}
