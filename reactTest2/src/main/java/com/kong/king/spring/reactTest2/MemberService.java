package com.kong.king.spring.reactTest2;

import java.util.List;

public interface MemberService {
    List<Member> getAllMembers();
    Member getMemberById(Long id);
    Member createMember(Member member);
    Member updateMember(Long id, Member member);
    void deleteMember(Long id);
}